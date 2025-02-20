
function selectOption(option) {
    const form = document.getElementById('donationForm');
    alert(`You selected to donate: ${option}`);
    form.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your generous donation!');
    this.reset();
});
