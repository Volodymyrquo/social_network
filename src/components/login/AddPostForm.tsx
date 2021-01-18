import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/formsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);


const AddPostForm: React.FC<InjectedFormProps> = (props:any) => {


    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your post" component={Textarea} name="newPostText" validate={[required,maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )

}
export default  reduxForm({form:"post"})(AddPostForm)


