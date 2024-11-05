const FormCheckout = ({ dataForm, handleInput, handleSubmit }) => {
    return (
        <>
            <div className='formCheckout'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit} className='needs-validation'>
                            <div className='row mb-3'>
                                <div className='col was-validated'>
                                    <label htmlFor='name' className='form-label'>Nombre</label>
                                    <input type='text' className='form-control' name='name' value={dataForm.name} onChange={handleInput} required />
                                </div>
                                <div className='col was-validated'>
                                    <label htmlFor='lastname' className='form-label'>Apellido</label>
                                    <input type='text' className='form-control' name='lastname' value={dataForm.lastname} onChange={handleInput} required />
                                </div>
                            </div>
                            <div className='mb-3 was-validated'>
                                <label htmlFor='phone' className='form-label'>Teléfono</label>
                                <input type='number' className='form-control' name='phone' value={dataForm.phone} onChange={handleInput} required />
                            </div>
                            <div className='mb-3 was-validated'>
                                <label htmlFor='email' className='form-label'>Correo electrónico</label>
                                <input type='email' className='form-control' name='email' value={dataForm.email} onChange={handleInput} required />
                            </div>
                            <div className='mb-3 was-validated'>
                                <label htmlFor='verifyEmail' className='form-label'>Repetir correo electrónico</label>
                                <input type='email' className='form-control' name='verifyEmail' value={dataForm.verifyEmail} onChange={handleInput} required />
                            </div>
                            <div className='d-grid justify-content-center'>
                                <button type='submit' className='btn btn-primary'>Finalizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FormCheckout