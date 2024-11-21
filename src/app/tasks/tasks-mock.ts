export interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    status: 'Pending' | 'In Progress' | 'Completed';
}

export const tasks: Task[] = [
    {
        id: 1,
        title: 'Prepare Quarterly Financial Report',
        description: 'Compile and analyze the financial data for Q4, including income statements, balance sheets, and cash flow reports. Ensure that all data is accurate and up to date before submission.',
        dueDate: '2024-11-25',
        status: 'Pending',
    },
    {
        id: 2,
        title: 'Update Project Roadmap for Alpha Release',
        description: 'Coordinate with team leads to update the project roadmap, focusing on upcoming milestones for the alpha release. Make sure that timelines are clearly communicated to stakeholders.',
        dueDate: '2024-12-01',
        status: 'In Progress',
    },
    {
        id: 3,
        title: 'Client Meeting: Requirements Gathering',
        description: 'Meet with the client to discuss detailed requirements for the new feature implementation. Gather all necessary information, and prepare a summary report for the development team.',
        dueDate: '2024-12-02',
        status: 'Pending',
    },
    {
        id: 4,
        title: 'Employee Performance Reviews',
        description: 'Conduct performance reviews for the engineering team. Provide feedback on achievements and identify areas for improvement. Schedule one-on-one meetings to discuss individual development plans.',
        dueDate: '2024-11-30',
        status: 'In Progress',
    }
];