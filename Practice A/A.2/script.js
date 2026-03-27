function showToast(type, title, message) {
    const container = document.getElementById('toast-container');

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconClass = 'fa-circle-info';
    if(type === 'success') iconClass = 'fa-circle-check';
    if(type === 'error') iconClass = 'fa-circle-xmark';
    if(type === 'warning') iconClass = 'fa-triangle-exclamation';

    toast.innerHTML = `
        <i class="fa-solid ${iconClass}"></i>
        <div class="toast-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <span class="toast-close" onclick="this.parentElement.remove()">&times;</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        if(toast) {
            toast.remove();
        }
    }, 4000);
}