document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing page script loaded.');

    const ctaButton = document.getElementById('ctaButton');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Thank you for your interest! We will get back to you shortly.');
            console.log('Call to Action button clicked!');
        });
    } else {
        console.error('CTA button not found!');
    }
});