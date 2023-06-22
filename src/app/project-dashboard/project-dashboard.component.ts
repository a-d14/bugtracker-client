import { Component } from '@angular/core';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css'],
})
export class ProjectDashboardComponent {
  users:any = [
    {
      name: 'Aakash Dasgupta',
      status: 'online'
    },
    {
      name: 'Dhruv Agarwal',
      status: 'offline'
    },
    {
      name: 'Gunjan Tomar',
      status: 'online'
    },
    {
      name: 'Raghuraman',
      status: 'offline'
    },
  ]

  tickets: any = [
    {
      name: 'Write header code',
      type: 'New Feature',
      priority: 'Medium',
      deadline: ''
    },
    {
      name: 'Create Add Ticket Feature',
      type: 'New Feature',
      priority: 'Medium',
      deadline: ''
    },
    {
      name: 'Create Add Project Feature',
      type: 'New Feature',
      priority: 'Medium',
      deadline: ''
    },
    {
      name: 'Create add friends feature',
      type: 'New Feature',
      priority: 'Medium',
      deadline: ''
    }
  ]

  projects: any = [
    {
      name: '',
      ticketPriorityCount: {
        low: 0,
        medium: 0,
        high: 0
      }
    }
  ]
}
