

const formulario = document.querySelector("#formulario").addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    // Guardar los datos en el localStorage
    localStorage.setItem("formData", JSON.stringify(data));



    Swal.fire({
        title: 'Tu mensaje fue enviado.',
        text: 'En breve nos contactaremos con vos para atender tu consulta',
        icon: 'success',
        customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            confirmButton: 'custom-swal-confirm-button'
        }
    });
    
});


