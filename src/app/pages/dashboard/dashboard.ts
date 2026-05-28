import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  summary = signal({
    total: 0,
    pending: 0,
    completed: 0,
    totalUsers: 0
  });

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getSummary().subscribe({
      next: (data) => {
        console.log(data);

        this.summary.set({
          total: data.totalTickets,
          pending: data.pendingTickets,
          completed: data.completedTickets,
          totalUsers: data.totalUsers
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}