import React, {useEffect } from 'react'
import axios from 'axios'

function Login () {

    useEffect (()=>{
        axios({
            method:'post',
            url:'shop.nimahabibkhoda.ir/api/v1/admin/login',
            params:{
                email:'admin@admin.com',
                password:'admin123456'
            }
        })
    })

    return(
        <>
        </>
    )
}

export default Login