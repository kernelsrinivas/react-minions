const ROOT_ACTION_TYPE = { //Root Action Type

    PRODUCT : {

        //Products List Page (PLP)
        GET_LIST : "products/list/get",
        GET_LIST_SUCCEED : "products/list/get/succeed",
        GET_LIST_FAILED: "products/list/get/failed",

        //Product Detail Page (PDP)
        GET_DETAILS: "products/details/get",
        GET_DETAILS_SUCCEED: "products/details/get/succeed",
        GET_DETAILS_FAILED: "products/details/get/failed",

    },
    
    ORDERS: {

        //Cart List Page (CLP)
        GET_CART: "orders/list/get",
        GET_CART_SUCCEED: "orders/list/get/succeed",
        GET_CART_FAILED: "orders/list/get/failed",

        ADD_CART: "orders/list/add",
        ADD_CART_SUCCEED: "order/list/add/succeed",
        ADD_CART_FAILED: "order/list/add/failed",

        UPDATE_CART: "orders/list/update",
        UPDATE_CART_SUCCEED : "orders/list/update/succeed",
        UPDATE_CART_FAILED: "orders/list/update/failed",

        DELETE_CART: "orders/list/delete",
        DELETE_CART_SUCCEED: "orders/list/delete/succeed",
        DELETE_CART_FAILED: "orders/list/delete/failed",
    },

    DELIVERY: {

        // Delivery List Page (DLP)
        GET_ADDRESS: "delivery/list/get",
        GET_ADDRESS_SUCCEED: "delivery/list/get/succeed",
        GET_ADDRESS_FAILED: "delivery/list/get/failed",

        ADD_ADDRESS: "delivery/list/add",
        ADD_ADDRESS_SUCCEED: "delivery/list/add/succeed",
        ADD_ADDRESS_FAILED: "delivery/list/add/failed",

        SELECT_DELIVERY: "delivery/list/select",
        SELECT_DELIVERY_SUCCEED : "delivery/list/select/succeed",
        SELECT_DELIVERY_FAILED: "delivery/list/select/failed",

        UPDATE_ADDRESS: "delivery/list/update",
        UPDATE_ADDRESS_SUCCEED: "delivery/list/update/succeed",
        UPDATE_ADDRESS_FAILED: "delivery/list/update/failed",

        DELETE_ADDRESS: "delivery/list/delete",
        DELETE_ADDRESS_SUCCEED: "delivery/list/delete/succeed",
        DELETE_ADDRESS_FAILED: "delivery/list/delete/failed",
    },

    CHECKOUT: {

        // Checkout Details Page (CDP)
        CALCULATE : "checkout/bill/calculate",
        DISPLAY: "checkout/bill/show",
        PROCESS: "checkout/bill/process",
        PAYMENT_PAID: "checkout/bill/process/paid",
        PAYMENT_FAILED: "checkout/bill/process/failed"
    },

    THANKS: {
        
        //Order Thanks Page (OTP)
        ORDER_PLACED: 'thanks/checkout/complete'
    }
}