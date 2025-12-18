import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';

interface QualityMetric {
  id: number;
  title: string;
  value: number;
  change: number;
  icon: string;
  color: string;
}

interface RecentTest {
  id: number;
  name: string;
  status: 'success' | 'warning' | 'error';
  date: string;
  duration: string;
  coverage: number;
}

interface Project {
  id: number;
  name: string;
  status: 'active' | 'pending' | 'completed';
  progress: number;
  tests: number;
  bugs: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTabsModule,
    MatBadgeModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  // Métricas de qualidade
  protected readonly metrics = signal<QualityMetric[]>([
    {
      id: 1,
      title: 'Cobertura de Testes',
      value: 87.5,
      change: 5.2,
      icon: 'analytics',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Bugs Críticos',
      value: 3,
      change: -2,
      icon: 'bug_report',
      color: 'warn'
    },
    {
      id: 3,
      title: 'Testes Passando',
      value: 94.2,
      change: 3.1,
      icon: 'check_circle',
      color: 'accent'
    },
    {
      id: 4,
      title: 'Tempo Médio de Build',
      value: 4.3,
      change: -0.8,
      icon: 'speed',
      color: 'primary'
    }
  ]);

  // Testes recentes
  protected readonly recentTests = signal<RecentTest[]>([
    {
      id: 1,
      name: 'Teste de Integração - API de Usuários',
      status: 'success',
      date: '2025-12-17 10:30',
      duration: '2m 15s',
      coverage: 92
    },
    {
      id: 2,
      name: 'Teste Unitário - Serviço de Autenticação',
      status: 'success',
      date: '2025-12-17 09:45',
      duration: '1m 30s',
      coverage: 95
    },
    {
      id: 3,
      name: 'Teste E2E - Fluxo de Checkout',
      status: 'warning',
      date: '2025-12-17 08:20',
      duration: '5m 42s',
      coverage: 78
    },
    {
      id: 4,
      name: 'Teste de Performance - Dashboard',
      status: 'error',
      date: '2025-12-17 07:15',
      duration: '3m 10s',
      coverage: 65
    },
    {
      id: 5,
      name: 'Teste de Segurança - Validação de Inputs',
      status: 'success',
      date: '2025-12-16 18:30',
      duration: '2m 45s',
      coverage: 88
    }
  ]);

  // Projetos
  protected readonly projects = signal<Project[]>([
    {
      id: 1,
      name: 'Sistema de Gerenciamento de Qualidade',
      status: 'active',
      progress: 75,
      tests: 248,
      bugs: 12
    },
    {
      id: 2,
      name: 'API de Integração com Terceiros',
      status: 'active',
      progress: 60,
      tests: 156,
      bugs: 8
    },
    {
      id: 3,
      name: 'Dashboard de Métricas',
      status: 'pending',
      progress: 30,
      tests: 89,
      bugs: 5
    },
    {
      id: 4,
      name: 'Sistema de Relatórios',
      status: 'completed',
      progress: 100,
      tests: 312,
      bugs: 2
    }
  ]);

  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      'success': 'accent',
      'warning': 'warn',
      'error': 'warn',
      'active': 'primary',
      'pending': 'warn',
      'completed': 'accent'
    };
    return colors[status] || 'primary';
  }

  getStatusText(status: string): string {
    const texts: Record<string, string> = {
      'success': 'Passou',
      'warning': 'Atenção',
      'error': 'Falhou',
      'active': 'Ativo',
      'pending': 'Pendente',
      'completed': 'Concluído'
    };
    return texts[status] || status;
  }

  getStatusIcon(status: string): string {
    const icons: Record<string, string> = {
      'success': 'check_circle',
      'warning': 'warning',
      'error': 'error',
      'active': 'play_circle',
      'pending': 'schedule',
      'completed': 'task_alt'
    };
    return icons[status] || 'info';
  }

  // Getter para permitir uso de Math no template
  get Math() {
    return Math;
  }
}
