import { DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type MatchStatus = 'upcoming' | 'live' | 'finished';

export interface Team {
  name: string;
  logo: string;
}

export interface Match {
  date: string | Date;
  time?: string;
  result?: string;
  homeScore?: number;
  awayScore?: number;
  status: MatchStatus;
  home: Team;
  away: Team;
}

@Component({
  selector: 'app-matches',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchesComponent {

  matches = input<Match[]>([]);
  columns = input(1);
  showLegend = input(true);
  title = input('Matches');
  showHeader = input(true);

  // ✅ Derived state (reactive transformation if needed later)
  sortedMatches = computed(() => {
    return [...this.matches()].sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  });

  // ✅ Clean display logic
  getDisplayValue(match: Match): string {
    switch (match.status) {
      case 'upcoming':
        return match.time || '';
      case 'live':
        return `${match.homeScore ?? 0} - ${match.awayScore ?? 0}`;
      case 'finished':
        return match.result || '';
      default:
        return '';
    }
  }
}