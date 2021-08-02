'use strict';

const forms = (exceptionSelector) => {
    const form = document.querySelectorAll('form'),
          upload = document.querySelectorAll('[name="upload"]'),
          exception = document.querySelector(exceptionSelector);

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    };

    const path = {
        designer: 'assets/index.php',
        question: 'assets/question.php'
    }

    const  postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        const inputs = document.body.querySelectorAll('input');
    
        inputs.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            let arr =  item.files[0].name.split('.');
            arr[0].length > 7 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', e =>{
            e.preventDefault();
            
            if(item != exception) {
                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.parentNode.appendChild(statusMessage);

                statusMessage.style.display = 'flex';
                statusMessage.style.flexDirection = 'column';
                statusMessage.style.justifyContent = 'center';
                statusMessage.style.alignItems = 'center';

                item.classList.add('animate__animated', 'animate__fadeOutUp');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 400);

                let statusImg = document.createElement('img');
                statusImg.setAttribute('src', message.spinner);
                statusImg.classList.add('animate__animated', 'animate__fadeInUp');
                statusMessage.appendChild(statusImg);

                let textMessage = document.createElement('div');
                textMessage.textContent = message.loading;
                statusMessage.appendChild(textMessage);

                const formData = new FormData(item);
                let api;

                item.closest('.popup-design') || item.classList.contains('calc-form') ? api = path.designer : api = path.question;

                postData(api, formData)
                    .then(res => {
                        console.log(res);
                        statusImg.setAttribute('src', message.ok);
                        textMessage.textContent = message.success;
                    })
                    .catch(() => {
                        textMessage.textContent = message.failure;
                        statusImg.setAttribute('src', message.fail);
                    })
                    .finally(() => {
                        clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();  
                            item.style.display = 'block';
                            item.classList.remove('animate__fadeOutUp');
                            item.classList.add('animate__fadeIn');
                        }, 5000);
                    });
            }
        });
    });
};

export default forms;