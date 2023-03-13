fetch('players.json')
  .then(response => response.json())
  .then(data => {
    const players = data["West Players"];
    const tableBody = document.getElementById("playerTableBodyRight");
    players.forEach(player => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const teamCell = document.createElement("td");
      const ppgCell = document.createElement("td");
      const apgCell = document.createElement("td");
      const rpgCell = document.createElement("td");
      nameCell.innerText = player.playerName;
      teamCell.innerText = player.team;
      ppgCell.innerText = player.ppg + " PPG";
      apgCell.innerText = player.apg + " APG";
      rpgCell.innerText = player.rpg + " RPG";

      // Create image row
      const imgRow = document.createElement("tr");
      const imgCell = document.createElement("td");
      const img = document.createElement("img");
      img.src = "Images/" + player.img;
      img.style.display = "block";
      img.style.margin = "auto";
      imgCell.appendChild(img);
      imgRow.appendChild(imgCell);

      // Append image row before player data row
      tableBody.appendChild(imgRow);
      tableBody.appendChild(row);

      row.appendChild(nameCell);
      row.appendChild(teamCell);
      row.appendChild(ppgCell);
      row.appendChild(apgCell);
      row.appendChild(rpgCell);
    });
  });