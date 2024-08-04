

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');
    const counterElement = document.getElementById('counter');
    const infoButton = document.getElementById('infoButton');
    const 
    mainer = document.getElementById('main');
    const close = document.querySelector('.mainer .close');
    
    let count = 0;

    button.addEventListener('click', () => {
        count += 1;
        counterElement.textContent = count;
        counterElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            counterElement.style.transform = 'scale(1)';
        }, 300);
    });

    // infoButton.addEventListener('click', () => {
        
    //     mainer.style.display = 'block';
    // });

    // close.addEventListener('click', () => {
        
    //     mainer.style.display = 'none';
    // });

    // window.addEventListener('click', (event) => {
    //     if (event.target === 
    //         mainer
    //     ) {
            
    //         mainer.style.display = 'none';
    //     }
    // });
});
