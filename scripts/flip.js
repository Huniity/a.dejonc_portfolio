function flipAllCards() {
            document.querySelectorAll('.flip-card').forEach(card => {
                card.classList.toggle('flipped');
            });
        }