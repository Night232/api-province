
document.addEventListener('DOMContentLoaded', function () {
    fetchData();
    fetchDataDistrict();
    fetchDataDeg();
});

function fetchData() {
    const apiUrl = 'https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            populateDropdown(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// สำหรับอำเภอ
function fetchDataDistrict() {
    const apiUrl = 'https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_amphure.json';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(dataDistrict => {
        district(dataDistrict);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

//   สำหรับตำบล
function fetchDataDeg() {
    const apiUrl = 'https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_tambon.json';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(dataDeg => {
        deg(dataDeg);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}

// จังหวัด
function populateDropdown(data) {
    const dropdown = document.getElementById('provinceDropdown');

    // เพิ่ม option เข้าไปใน dropdown
    data.forEach(province => {
        const option = document.createElement('option');
        option.value = province.name_th;
        option.text = province.name_th;
        dropdown.add(option);
    });
}

// อำเภอ
function district(dataDistrict) {
    const dropdown = document.getElementById('district');

    // เพิ่ม option เข้าไปใน dropdown
    dataDistrict.forEach(district => {
        const option = document.createElement('option');
        option.value = district.name_th;
        option.text = district.name_th;
        dropdown.add(option);
    });
}

// ตำบล
function deg(dataDeg) {
    const dropdown = document.getElementById('deg');

    // เพิ่ม option เข้าไปใน dropdown
    dataDeg.forEach(deg => {
        const option = document.createElement('option');
        option.value = deg.name_th;
        option.text = deg.name_th;
        dropdown.add(option);
    });
}