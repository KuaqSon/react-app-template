import {
  IconCalendarEvent,
  IconCalendarTime,
  IconChartArea,
  IconChartArrows,
  IconChartBar,
  IconChartDonut,
  IconChartPie,
  IconReport,
  IconSettingsAutomation,
  IconStack2,
  IconSubtask,
  IconTransform,
} from '@tabler/icons';
import { INavItemGroup } from 'interfaces/common';

export const defaultRoutes: INavItemGroup[] = [
  {
    title: 'Overview',
    items: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: IconChartPie,
      },
      {
        title: 'Performance',
        href: '/dashboard/performance',
        icon: IconChartArea,
      },
    ],
  },
  {
    title: 'Projects',
    items: [
      { title: 'All projects', href: '/projects/all', icon: IconStack2 },
      { title: 'Project settings', href: '/projects/setting', icon: IconSettingsAutomation },
    ],
  },
  {
    title: 'Scheduled',
    items: [
      { title: 'Calendar', href: '/scheduled/calendar', icon: IconCalendarEvent },
      { title: 'Availability', href: '/scheduled/availability', icon: IconCalendarTime },
    ],
  },
  {
    title: 'Tasks',
    items: [
      { title: 'All tasks', href: '/task/all', icon: IconSubtask },
      { title: 'In progress', href: '/task/in-progress', icon: IconTransform },
      { title: 'In review', href: '/task/in-review', icon: IconChartDonut },
      { title: 'Next up', href: '/task/next-up', icon: IconChartBar },
    ],
  },
  {
    title: 'Timer',
    items: [
      { title: 'Time logger', href: '/timer/logger', icon: IconChartArrows },
      { title: 'Report', href: '/timer/report', icon: IconReport },
    ],
  },
];
