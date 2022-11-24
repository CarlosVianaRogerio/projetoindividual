
    const labels = ["Autoestima", "Sono", "Dor nas Costas", "Estresse", "Concentração"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Praticantes de musculação",
          data: [5, 9, 4, 2, 8],
          backgroundColor: ["rgba(255, 240, 0, 0.8)"],
          borderColor: ["rgb(255, 240, 0)"],
          borderWidth: 1,
        },
        {
          label: "Não praticantes de musculação",
          data: [10, contador_sono, 7, 4, 9],
          backgroundColor: ["rgba(0, 0, 0, 0.8)"],
          borderColor: ["rgb(0, 0, 0)"],
          borderWidth: 1,
        },
        
      ],
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const myChart = new Chart(document.getElementById("myChart"), config);

    window.onload = function(){
     window.scrollTo(0,4930)
}
