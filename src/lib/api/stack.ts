export const fetchStackData = async (stackId: string) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
        id: "099837465721",
        name: "Sample Stack",
        historical: [500, 450, 600, 500, 700, 650, 800],
        forecast: [750, 600, 700, 680, 750],
        labels: ['Q2 2022', 'Q3 2022', 'Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'],
        tableData: [
            {id: 1, label: 'Data 1', values: [744038, 670100, 640250, 670000, 71100, 712033, 705500, 719123]},
            {id: 2, label: 'Data 2', values: [410623, 455754, 536564, 474411, 501124, 513751, 550004, 545455]},
        ]
    };
};