import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getUserOrders} from "../store/actions/orderActions";
import Orders from "./profile/Orders";

const Profile = props => {
    const user = props.user.user
    useEffect(() => {
            if (!props.order.orders.length) {
                props.getUserOrders(user.id)
            }
        }, [])
    return (
        <>
            <Orders/>
        </>
    )
}

export default connect(state => state, {getUserOrders})(Profile)

