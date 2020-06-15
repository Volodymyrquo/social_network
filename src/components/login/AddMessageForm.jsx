import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                    <Field placeholder="Enter your message." component={Textarea} name="newMessageBody" validate={[required, maxLength50 ]} />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )

}
export default reduxForm({form:"message"})(AddMessageForm)


