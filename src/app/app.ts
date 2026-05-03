import { Component, signal } from '@angular/core';
import { Match, MatchesComponent } from './matches/matches.component';

@Component({
  selector: 'app-root',
  imports: [MatchesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('futbol-ui');

  protected readonly upcomingMatches: Match[] = [
    {
      date: new Date(2025, 4, 24),
      time: '19:00',
      status: 'upcoming',
      home: { name: 'América', logo: 'https://picsum.photos/28?team1' },
      away: { name: 'Chivas', logo: 'https://picsum.photos/28?team2' },
    },
    {
      date: new Date(2025, 4, 25),
      homeScore: 2,
      awayScore: 1,
      status: 'live',
      home: { name: 'Tigres', logo: 'https://picsum.photos/28?team3' },
      away: { name: 'Monterrey', logo: 'https://picsum.photos/28?team4' },
    },
    {
      date: new Date(2025, 4, 23),
      result: '3 - 0',
      status: 'finished',
      home: { name: 'LA Galaxy', logo: 'https://picsum.photos/28?team5' },
      away: { name: 'Inter Miami', logo: 'https://picsum.photos/28?team6' },
    },
  ];
}
