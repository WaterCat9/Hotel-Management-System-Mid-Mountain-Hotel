function checkPhoneNumber(inputElement) {
    var phoneNumber = inputElement.value;
    if (phoneNumber.length === 11) {
        inputElement.style.borderColor = '#27ae60';
        inputElement.style.borderWidth = '1px';
    } else if (phoneNumber.length > 0) {
        inputElement.style.borderColor = '#c0392b';
        inputElement.style.borderWidth = '1px';
    } else {
        inputElement.style.borderColor = 'rgba(201, 168, 76, 0.2)';
        inputElement.style.borderWidth = '1px';
    }
}

function bookTable() {
    var nameInput = document.querySelector('.form-group input[type="text"]');
    var genderSelect = document.querySelectorAll('.form-group select')[0];
    var phoneInput = document.querySelector('.form-group input[type="tel"]');
    var restaurantSelect = document.querySelectorAll('.form-group select')[1];
    var peopleSelect = document.querySelectorAll('.form-group select')[2];
    var datetimeInput = document.querySelector('.form-group input[type="datetime-local"]');
    var notesInput = document.querySelector('.form-group textarea');

    if (!nameInput || !phoneInput || !datetimeInput) {
        alert('Please fill in all required fields');
        return;
    }

    var name = nameInput.value.trim();
    var phone = phoneInput.value.trim();
    var datetime = datetimeInput.value;

    if (!name || !phone || !datetime) {
        alert('Please fill in all required fields (Name, Phone, Date & Time)');
        return;
    }

    var storedBookings = localStorage.getItem('bookings');
    var bookings;
    if (storedBookings) {
        bookings = JSON.parse(storedBookings);
    } else {
        bookings = [];
    }

    var newBooking = {
        name: name,
        gender: genderSelect ? genderSelect.value : '',
        phone: phone,
        restaurant: restaurantSelect ? restaurantSelect.value : '',
        people: peopleSelect ? peopleSelect.value : '',
        datetime: datetime,
        notes: notesInput ? notesInput.value : '',
        time: new Date().toLocaleString()
    };

    bookings.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert('Table reserved successfully! We look forward to welcoming you.');

    nameInput.value = '';
    if (genderSelect) { genderSelect.selectedIndex = 0; }
    phoneInput.value = '';
    if (restaurantSelect) { restaurantSelect.selectedIndex = 0; }
    if (peopleSelect) { peopleSelect.selectedIndex = 0; }
    datetimeInput.value = '';
    if (notesInput) { notesInput.value = ''; }
    phoneInput.style.borderColor = 'rgba(201, 168, 76, 0.2)';
}
