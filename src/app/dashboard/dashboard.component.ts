import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { FirebaseService } from '../firebase-service/firebase.service';
import { Project } from '../../models/project.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  chart: any;
  pieChart: any;
  projects: Project[] = [];
  revenueData: number[] = [];
  revenueManagerA: number = 0;
  revenueManagerB: number = 0;
  revenueManagerC: number = 0;
  managerA: number = 0;
  managerB: number = 0;
  managerC: number = 0;
  averageRevenue: number = 0;


  constructor(private service: FirebaseService) {
  }

  ngOnInit(): void {
    this.service.ReadData("project", this.projects);
    this.getDataAndChart();
  }

  getDataAndChart() {
    if (this.projects.length > 0) {
      this.managerData();
      this.createChart();
      this.createPieChart();
    } else {
      setTimeout(() => {
        this.getDataAndChart();
      }, 1000);
    }
  }

  managerData() {
    for (let index = 0; index < this.projects.length; index++) {
      let x = this.projects[index].revenue;
      if (this.projects[index].manager == 'Max Muster') {
        this.revenueManagerA += x;
        this.managerA++;
      } else if (this.projects[index].manager == 'Sonja Sonnig') {
        this.revenueManagerB += x;
        this.managerB++;
      } else {
        this.revenueManagerC += x;
        this.managerC++;
      }
    }
  }

  getAverageRevenue() {
    return this.averageRevenue = (this.revenueManagerA + this.revenueManagerB + this.revenueManagerC) / 3;
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',

      data: {
        labels: ['Max Muster', 'Sonja Sonnig', 'Other Manager'],
        datasets: [
          {
            label: "Revenue in €",
            data: [this.revenueManagerA, this.revenueManagerB, this.revenueManagerC],
            backgroundColor: 'green'
          },
          {
            label: "Goal in €",
            data: [10000, 20000, 30000],
            backgroundColor: 'red'
          },
          {
            label: "Average Revenue in €",
            data: [this.getAverageRevenue(), this.getAverageRevenue(), this.getAverageRevenue()],
            backgroundColor: 'orange'
          }
        ]
      },
      options: {
        aspectRatio: 3.5
      }
    });
  }

  createPieChart() {
    this.pieChart = new Chart("pie", {
      type: 'pie',
      data: {
        labels: ['Max Muster', 'Sonja Sonnig', 'Other Manager'],
        datasets: [{
          label: 'Amount of Projects',
          data: [this.managerA, this.managerB, this.managerC],
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio: 3.5
      }
    });
  }
}
