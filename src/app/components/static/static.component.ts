import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {

  ngOnInit(): void {
    this.renderRevenueVsUnitsChart();
    this.renderUnitsByAgeChart();
    this.renderTopProductCategoriesChart();
    this.renderRevenueByCategoryChart();
  }

  renderRevenueVsUnitsChart(): void {
    new Chart("revenueVsUnits", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Revenue',
            data: [10, 12, 15, 8, 14, 16, 18, 12, 15, 20, 17, 19],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            type: 'line',
            yAxisID: 'y'
          },
          {
            label: 'Units Sold',
            data: [2000, 2500, 3000, 1500, 2200, 2600, 3000, 2700, 3200, 4000, 3600, 3900],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
          y1: { beginAtZero: true, position: 'right' }
        }
      }
    });
  }

  renderUnitsByAgeChart(): void {
    new Chart("unitsByAge", {
      type: 'bar',
      data: {
        labels: ['0-18', '18-24', '25-45', '45+'],
        datasets: [
          {
            label: 'Female',
            data: [500, 1000, 1500, 500],
            backgroundColor: 'rgba(255, 99, 132, 0.6)'
          },
          {
            label: 'Male',
            data: [600, 1200, 1700, 800],
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
          }
        ]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  renderTopProductCategoriesChart(): void {
    new Chart("topProductCategories", {
      type: 'bar',
      data: {
        labels: ['0-18', '18-24', '25-45', '45+'],
        datasets: [
          {
            label: 'TV',
            data: [10000, 15000, 25000, 10000],
            backgroundColor: 'rgba(255, 206, 86, 0.6)'
          },
          {
            label: 'Laptops',
            data: [5000, 20000, 30000, 15000],
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
          },
          {
            label: 'Desktops',
            data: [7000, 18000, 27000, 9000],
            backgroundColor: 'rgba(153, 102, 255, 0.6)'
          }
        ]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  renderRevenueByCategoryChart(): void {
    new Chart("revenueByCategory", {
      type: 'doughnut',
      data: {
        labels: ['TV', 'Laptops', 'Desktops'],
        datasets: [
          {
            data: [13000000, 26000000, 23000000],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)'
            ]
          }
        ]
      },
      options: { responsive: true }
    });
  }
}
