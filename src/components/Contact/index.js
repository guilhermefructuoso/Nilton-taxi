import { db } from '../../firebaseConnection'
import { addDoc, collection } from 'firebase/firestore'
import './contact.css'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import bg from '../../assets/bg-contact.png'
import 'react-toastify/dist/ReactToastify.css'

function Contact() {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm({})
    const onSubmit = async (data) => {
        await addDoc(collection(db, "contact"),{
            name: data.name,
            email: data.email,
            phone: data.phone,
            destination: data.destination,
            message: data.message
        })
        .then(()=>{
            toast.success('Mensagem enviada com sucesso!')
        })
        .catch((error)=>{
            alert('ERRO' + error)
        })
       
        await addDoc(collection(db, "mail"), {
            to: 'portosegurotaxi1@gmail.com',
            message: {
              subject: 'Olá, gostaria de fazer um orçamento!',
              html: JSON.stringify(data)
          
            },
        })
        
        reset({
            name: '',
            email: '',
            phone: '',
            destination: '',
            message: '',
        })
    }

 return (
 <section id='contact'>
         <div className="form-contact">
                        <div className="title-form">
                            <h3>Solicite seu orçamento!</h3>
                        </div>
                        <div className='form'>
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <label>Nome*</label>
                            <input 
                                className={errors.name ? 'red-border' : ''}
                                placeholder="Digite seu nome..."
                                {...register('name', { required: true })} 
                            />
                            <label>E-mail*</label>
                            <input 
                                className={errors.email ? 'red-border' : ''}
                                placeholder="Digite seu e-mail..."
                                {...register('email', { required: true })}
                            />
                            <label>Telefone*</label>
                            <input 
                                className={errors.phone ? 'red-border' : ''}
                                placeholder="Digite seu telefone..."
                                {...register('phone', { required: true })}
                            />

                            <label>Destino*</label>
                            <input 
                                className={
                                    errors.destination ? 'red-border' : ''
                                }
                                placeholder="Digite seu destino..."
                                {...register('destination', { required: true })}
                            />

                            <label>Mensagem</label>
                            <textarea 
                                placeholder="Digite sua mensagem..."
                                {...register('message')}
                            />

                            <div className="contact-button">
                                <button id='btn' type="submit">Enviar</button>
                            </div>
                        </form>
                        </div>
                </div>
                <div className="bg-contact">
                    <img src={bg} alt="praia" />
                </div>
             
 </section>
 );
}


export default Contact;