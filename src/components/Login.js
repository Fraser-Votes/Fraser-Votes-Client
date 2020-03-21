import React from "react"
import { navigate } from "@reach/router"
import { useState } from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { setUser, isLoggedIn } from "../utils/auth"
import firebase from "gatsby-plugin-firebase"
import { Button, theme } from "@chakra-ui/core"

const Login = () => {
  // const [firebase, setFirebase] = useState()

  // setFirebase(firebase)

  console.log(firebase)

  if (isLoggedIn()) {
    navigate(`/app/profile`)
    return null
  }

  function getUiConfig(auth) {
    return {
      signInFlow: "popup",
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        // auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: result => {
          setUser(result.user)
          navigate("/app/profile")
        },
      },
    }
  }

  return (
    <div>
      <div>

      </div>
      <div>
        <p>Please sign-in to access to the private route:</p>
        {/* {firebase && (
          <StyledFirebaseAuth
            uiConfig={getUiConfig(firebase.auth)}
            firebaseAuth={firebase.auth()}
          />
        )} */}
      <Button width="100%" variantColor="primary" size="lg">
        Continue
      </Button>

      </div>
    </div>
  )
}

export default Login
