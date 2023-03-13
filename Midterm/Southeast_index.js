fetch('Southeast_data.json')
  .then(response => response.json())
  .then(data => {
    const teams = data["Southeast Division Teams"];
    const tableBody = document.getElementById("southeateamTableBody");
    teams.forEach(team => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const winPCell = document.createElement("td");
      const gbCell = document.createElement("td");
      const conPCell = document.createElement("td");
      const homePCell = document.createElement("td");
      const headCCell = document.createElement("td");
      nameCell.innerText = team.teamName;
      winPCell.innerText = team.winP;
      gbCell.innerText = team.GamesBehind;
      conPCell.innerText = team.ConP;
      homePCell.innerText = team.HomeP;
      headCCell.innerText = team.HeadC;
      // Create image row
      const imgRow = document.createElement("tr");
      const imgCell = document.createElement("td");
      const img = document.createElement("img");
      img.src = "Images/" + team.img;
      img.style.display = "block";
      img.style.margin = "auto";
      imgCell.appendChild(img);
      imgRow.appendChild(imgCell);

      // Append image row before player data row
      tableBody.appendChild(imgRow);
      tableBody.appendChild(row);
      row.appendChild(nameCell);
      row.appendChild(winPCell);
      row.appendChild(gbCell);
      row.appendChild(conPCell);
      row.appendChild(homePCell);
      row.appendChild(headCCell);
      tableBody.appendChild(row);
    });
  });