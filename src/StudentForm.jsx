import { useFormik } from "formik"
import *as Yup from 'yup'

/*function checkForm(values){
    var errors={};
    if(!values.username){
        errors.username="user name is madatary"
    }
    if(!values.passward){
        errors.passward="we would like to know your passward"
    }
    return errors;
}*/

function StudentForm() {

    var formik=useFormik({
        initialValues:{
            username:"",
            passward:""
        },
        validationSchema:Yup.object({
          username:Yup.string().max(8,"too big to spell").min(3,'too small').required('username is must'),
          passward:Yup.string().max(10,"too big to spell").min(5,'too small').required('passward is must')
        }),
       // validate:checkForm,
        onSubmit:(values)=>{
            console.log("onsumit",values)
        }
    })
    console.log(formik.touched)
  return (
    <div className="border border-2 border-info p-3 m-2 w-25">
      <h1>Studentdetails</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="un">Username</label>
        <input type="text" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} /><br /><br />
        <div>{formik.touched.username &&formik.errors.username}</div>
        <label htmlFor="pw">Passward</label>
        <input type="text" name="passward" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br /><br />
        <div>{formik.touched.passward && formik.errors.passward}</div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  )
}

export default StudentForm;
