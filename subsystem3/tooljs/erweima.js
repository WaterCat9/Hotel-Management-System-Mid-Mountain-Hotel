
    payButtons.forEach(button => {
        button.addEventListener('click', function() {
            qrModal.style.display = 'block';

        });
    });

    qrClose.addEventListener('click', function() {
        qrModal.style.display = 'none';
    });
    qrConfirm.addEventListener('click', function() {
        const roomId = parseInt(payid.innerText);
        if (!roomId) {
            alert('Payment error: no room selected.');
            return;
        }
        const room = rooms.find(r => r.id === roomId);
        if (room) {
            room.status = 1;
        }

        localStorage.setItem('singlerooms', JSON.stringify(rooms));
        alert('Payment successful! Room ' + roomId + ' is now occupied.');
        renderroom();
        location.href='rooms.html'
    })
