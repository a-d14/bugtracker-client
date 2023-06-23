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
      name: 'DevCollab',
      ticketPriorityCount: {
        low: 0,
        medium: 4,
        high: 0
      }
    },
    {
      name: 'MindClear Android App',
      ticketPriorityCount: {
        low: 0,
        medium: 0,
        high: 0
      }
    },
    {
      name: 'EduSocial - University Social Media',
      ticketPriorityCount: {
        low: 0,
        medium: 0,
        high: 0
      }
    }
  ]
}
