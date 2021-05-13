import React, { useState, useEffect } from "react";
import s from "./ViewOrder.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getUsersById } from "../../store/user/user.action";
import { cleanCart, getOrderByUserId, putOrderById } from "../../store/order/order.action";
import { NavLink } from "react-router-dom";



export default function ViewOrder() {

  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({
    state: "",
    address: "",
  });

  const { id } = useParams()
  
  useEffect(() => {
    dispatch(getUsersById(id))
    dispatch( getOrderByUserId(id))
  }, [dispatch,id])

  const user = useSelector((state) => state.userReducer?.user)
  const orderuserid = useSelector((state) => state.orderReducer?.ordersUser)

  const sumTotal = function () {
    let total = 0;
    if (orderuserid.products) {
        total= orderuserid.products.reduce((ac,e)=>ac+parseFloat(e.price),0)
      }
    return "$ " + total;
  };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSave = function () {
    const data = {
      state: input.state === "" ? orderuserid.state : input.state,
      address: input.address,
    };
    dispatch(putOrderById(parseInt(orderuserid.id),data))
    dispatch( getOrderByUserId(parseInt(id)))
  };
  const history=useHistory()
  const onClose = function () {
    history.push("/PageCheckoutOrders")
  };

  const onClean = function () {
    dispatch(cleanCart(orderuserid.id));
    alert("Se eliminaron los productos de la orden");
  };

  if (!orderuserid) {
    return (
      <div className={s.viewOrder}>
        <div className={s.content}>
          <h3>Cargando datos...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className={s.viewOrder}>
      <div className={s.content}>
        <h3>Panel de ordenes</h3>
        <div className={[s.info, s.topShadow].join(" ")}>
          <p>
            <span>Email: </span>
            {user && user.email}
          </p>
          <p>
            <span>Rol: </span>
            {user && user.access}
          </p>
        </div>
        <div className={[s.info, s.botShadow].join(" ")}>
          <p>
            <span>ID: </span>
            {orderuserid && orderuserid.id}
          </p>
          <p>
            <span>Estado: </span>
            {edit === true ? (
              <select
                required
                onChange={handleInputChange}
                name="state"
                id="state"
              >
                <option value="">Seleccione el nuevo estado</option>
                <option value="creada">Creada</option>
                <option value="carrito">Carrito</option>
                <option value="procesando">Procesando</option>
                <option value="cancelada">Cancelada</option>
                <option value="completa">Completa</option>
              </select>
            ) : (
              orderuserid.state
            )}
          </p>
          <p>
            <span>Direccion: </span>
            {edit === true ? (
              <input
                onChange={handleInputChange}
                name="address"
                value={input.address}
                type="text"
              />
            ) : (
              orderuserid.address
            )}
          </p>
        </div>
        <table className={s.itemsTable}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Stock</th>
              <th>Precio Unit.</th>
            </tr>
          </thead>
          <tbody>
            { orderuserid.products &&
               orderuserid.products.map(function (product) {
                return (
                  <tr id={product.id}>
                    <td>{product.name}</td>
                    <td>{product.stock}</td>
                    <td>{product.price}</td>
                  </tr>
                );
              })}
            <tr className={s.total}>
              <td></td>
              <td>Total:</td>
              <td>{sumTotal()}</td>
            </tr>
          </tbody>
        </table>
        <div className={s.actions}>
          <div className={s.editar}>
            <p>Editar</p>
            <label className={s.switch}>
              <input type="checkbox" onChange={() => setEdit(!edit)} />
              <span className={[s.slider, s.round].join(" ")}></span>
            </label>
          </div>
          <div>
            <button
              onClick={onSave}
              className={[s.btn].join(" ")}
              disabled={!edit}
            >
              Guardar Cambios
            </button>
          </div>
          <div>
            {orderuserid.state === "carrito" && orderuserid.products.length > 0 && (
              <button onClick={onClean} className={[s.btn].join(" ")}>
                Vaciar orden
              </button>
            )}
          </div>
          <div>
            <button
              className={[s.btn].join(" ")} onClick={onClose}
            >
              
              Salir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
