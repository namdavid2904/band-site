document.addEventListener('DOMContentLoaded', function () {
    // Dropdown menu functionality
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('mouseover', function () {
            this.querySelector('.subNav').style.display = 'block';
        });
        dropdown.addEventListener('mouseout', function () {
            this.querySelector('.subNav').style.display = 'none';
        });
    });

    // Modal functionality
    var modal = document.querySelector('.modal');
    var modalClose = document.querySelector('.modal-close');
    var modalButton = document.querySelector('.buy-ticket');
    var modalButton2 = document.querySelector('.modal-button2');
    var modalButton1 = document.querySelector('.modal-button1');

    var paymentSection = document.querySelector('.payment-section');
    var totalPriceSection = document.querySelector('.total-price-section');
    var totalPriceDisplay = document.querySelector('.total-price');

    if (modalButton) {
        modalButton.addEventListener('click', function (event) {
            event.preventDefault();
            modal.style.display = 'flex';
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    if (modalButton2) {
        modalButton2.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    if (modalButton1) {
        modalButton1.addEventListener('click', function () {
            var ticketNumber = parseInt(document.getElementById('number').value);
            var totalPrice = ticketNumber * 15; // Assuming the price per ticket is $15
            totalPriceDisplay.textContent = '$' + totalPrice;
            paymentSection.style.display = 'none'; // Hide the payment section
            totalPriceSection.style.display = 'block'; // Display the total price section
        });
    }

    // Form submission for payment
    var paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
            var ticketNumber = parseInt(document.getElementById('number').value);
            var totalPrice = ticketNumber * 15; // Example total price calculation
            var paymentDetails = {
                totalPrice: totalPrice,
                paymentMethod: selectedPaymentMethod
            };
            console.log('Payment Details:', paymentDetails);
            // Here you can submit the payment details
            // For demonstration, we'll just hide the payment section
            paymentSection.style.display = 'none';
        });
    }

    // Form submission for contact
    var sendButton = document.querySelector('.send-button');
    if (sendButton) {
        sendButton.addEventListener('click', function (event) {
            event.preventDefault();
            var name = document.querySelector('input[type="text"]').value;
            var email = document.querySelector('input[type="email"]').value;
            var message = document.querySelector('textarea').value;
            console.log('Name: ', name);
            console.log('Email: ', email);
            console.log('Message: ', message);
        });
    }
});