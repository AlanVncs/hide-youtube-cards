function hideCards(){
    document.querySelectorAll(".ytp-ce-element").forEach(e => {
        e.style.display = "none";
    });
};


setTimeout(hideCards, 5000);