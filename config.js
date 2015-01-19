function save_options() {
    localStorage.setItem('auctionId', document.getElementById('auctionId').value);
    alert('saved');
}

function restore_options() {
    var auctionId = localStorage.getItem('auctionId');

    if (!auctionId) {
        auctionId = '0';
        localStorage.setItem('auctionId', 0);
    }

    document.getElementById('auctionId').value = auctionId;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);