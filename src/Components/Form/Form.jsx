import PropTypes from 'prop-types';
const Form = ({onInputValue,onBtnSubmit}) => {
    return ( 
     <>
     <h2>Name</h2>
       <form onSubmit={onBtnSubmit}>
           <input onChange={onInputValue}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <h2>Number</h2>
      <input onChange={onInputValue}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
      <button type="submit" >Add Contact</button>
       </form>
      
       </>
      );
     
}
Form.propTypes={
  onInputValue:PropTypes.func.isRequired, 
  onBtnSubmit:PropTypes.func.isRequired, 
  // onTelValue:PropTypes.func.isRequired, 
}
export default Form;