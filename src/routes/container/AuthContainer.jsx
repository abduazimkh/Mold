import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { auth__out } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import authApiInstance from '../../api/private/private_api_instance';

const PersistContainer = (props) => { 
  const [tokenStateValid, setTokenStateValid] = useState(false);
  const user = useSelector((state) => state.auth);
  useEffect(() => {
       if(user?.token && localStorage.getItem("token")){ 
        authApiInstance.get(process.env.REACT_APP_SERVER_BASEURL + "validation/validate-token")
        .then((response) => {
          if(response.status === 200){
            setTokenStateValid(true);
          }
        })
        .catch((err) => {
          if(err.response.status === 401 || err.response.status === 403){
            setTokenStateValid(false)
            props.auth__out()
          }
        })
       }
  }, [user, props])

  return tokenStateValid ?  (
    <Route {...props}/>
  ) : <></>
}

export default connect(null, { auth__out })(PersistContainer)
