function downloadPDF() {

    const element = document.getElementById("resume");

    const opt = {
        margin: 0,
        filename: "Resume.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
            scale: 3,
            useCORS: true,
            scrollY: 0
        },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        },
        pagebreak: { mode: "avoid-all" }
    };

    html2pdf().from(element).set(opt).save();
}