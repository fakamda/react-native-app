import React from 'react'
import { Formik } from 'formik'
import { View, Button, StyleSheet } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'

const initalValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form: {
        margin: 12
    }
})

export default function LogInPage () {
  return (
    <Formik initialValues={initalValues} onSubmit={values => console.log(values)}>
        {({ handleChange, handleSubmit, values })=> {
            return <View>
                <StyledTextInput placeholder='E-mail' value={values.email} onChangeText={handleChange('email')} />
                <StyledTextInput placeholder='Password' value={values.password} onChangeText={handleChange('password')} />
                <Button onPress={handleSubmit} title='Log In' />
            </View>
        }}
    </Formik>
  )
}
