$(document).ready(function () {
    const currentDate = moment();
    let selectedDate = null;
  
    function generateCalendar(year, month) {
      const firstDay = moment(`${year}-${month + 1}-01`);
      const daysInMonth = firstDay.daysInMonth();
      const startDay = firstDay.day();
  
      $('.days').empty();
  
      for (let i = 0; i < startDay; i++) {
        $('.days').append(`<div class="day disabled"></div>`);
      }
  
      for (let day = 1; day <= daysInMonth; day++) {
        const date = moment(`${year}-${month + 1}-${day}`);
        const dayElement = $(`<div class="day">${day}</div>`);
  
        if (date.isBefore(moment().startOf('day')) && currentDate.month() === month) {
          dayElement.addClass('disabled');
        } else {
          dayElement.addClass('current-month');
          dayElement.click(() => {
            if (!date.isBefore(moment().startOf('day')) || currentDate.month() !== month) {
              $('.day').removeClass('selected');
              dayElement.addClass('selected');
              selectedDate = date;
            }
          });
        }
  
        if (selectedDate && date.isSame(selectedDate, 'day')) {
          dayElement.addClass('selected');
        }
  
        $('.days').append(dayElement);
      }
    }
  
    function updateMonthYearDisplay(year, month) {
      $('#monthYear').text(moment({ year, month }).format('MMMM YYYY'));
    }
  
    function updateNavigationButtons() {
      if (currentDate.isSame(moment(), 'month')) {
        $('#prevBtn').hide();
      } else {
        $('#prevBtn').show();
      }
    }
  
    $('#prevBtn').click(() => {
      if (currentDate.isAfter(moment(), 'month')) {
        currentDate.subtract(1, 'month');
        generateCalendar(currentDate.year(), currentDate.month());
        updateMonthYearDisplay(currentDate.year(), currentDate.month());
        updateNavigationButtons();
      }
    });
  
    $('#nextBtn').click(() => {
      currentDate.add(1, 'month');
      generateCalendar(currentDate.year(), currentDate.month());
      updateMonthYearDisplay(currentDate.year(), currentDate.month());
      updateNavigationButtons();
    });
  
    generateCalendar(currentDate.year(), currentDate.month());
    updateMonthYearDisplay(currentDate.year(), currentDate.month());
    updateNavigationButtons();

    $('#hourSelect').change(function () {
        const selectedHour = $(this).val();
        console.log(`Hora seleccionada: ${selectedHour}`);
      });
      
    
  });
  