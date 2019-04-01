import englishMessages from 'ra-language-english';

export default {
    ...englishMessages,
    Not_Found: 'Not Found',
    pos: {
        search: 'Search',
        configuration: 'Configuration',
        language: 'Language',
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        dashboard: {
            monthly_revenue: 'Monthly Revenue',
            pending_reviews: 'Pending Reviews',
            new_users: 'New Users',
            order: {
                items:
                    'by %{user_name}, one item |||| by %{user_name}, %{nb_items} items',
            },
            welcome: {
                title: 'Welcome to Holo Hosting',
                subtitle:
                    "This is the admin of an imaginary poster shop. Fell free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
                not_provider: 'I am Not a hApp Provider',
                not_host: 'I am not a Host',
            },
            registerProvider: {
              not_provider:"I am Not a hApp Provider"
            }
        },
        menu: {
            sales: 'Sales',
            catalog: 'Catalog',
            users: 'Users',
        },
    },
    resources: {
        users: {
            name: 'Users |||| Users',
            fields: {
                commands: 'Orders',
                groups: 'Segments',
                last_seen_gte: 'Visited Since',
                name: 'Name',
                total_spent: 'Total spent',
            },
            tabs: {
                identity: 'Identity',
                address: 'Address',
                orders: 'Orders',
                reviews: 'Reviews',
                stats: 'Stats',
            },
            page: {
                delete: 'Delete User',
            },
        },
        happs: {
            name: 'hApps |||| hApps',
            fields: {
                category_id: 'Category',
                height_gte: 'Min height',
                height_lte: 'Max height',
                height: 'Height',
                image: 'Image',
                price: 'Price',
                reference: 'Reference',
                stock_lte: 'Low Stock',
                stock: 'Stock',
                thumbnail: 'Thumbnail',
                width_gte: 'Min width',
                width_lte: 'Max width',
                width: 'Width',
            },
            tabs: {
                image: 'Image',
                details: 'Details',
                description: 'Description',
                reviews: 'Reviews',
            },
        },
        categories: {
            name: 'Category |||| Categories',
            fields: {
                happs: 'hApps',
            },
        },
        reviews: {
            name: 'Review |||| Reviews',
            detail: 'Review detail',
            fields: {
                user_id: 'User',
                command_id: 'Order',
                happ_id: 'hApp',
                date_gte: 'Posted since',
                date_lte: 'Posted before',
                date: 'Date',
                comment: 'Comment',
                rating: 'Rating',
            },
            action: {
                accept: 'Accept',
                reject: 'Reject',
            },
            notification: {
                approved_success: 'Review approved',
                approved_error: 'Error: Review not approved',
                rejected_success: 'Review rejected',
                rejected_error: 'Error: Review not rejected',
            },
        },
        segments: {
            name: 'Segments',
            fields: {
                users: 'Users',
                name: 'Name',
            },
            data: {
                compulsive: 'Compulsive',
                collector: 'Collector',
                ordered_once: 'Ordered once',
                regular: 'Regular',
                returns: 'Returns',
                reviewer: 'Reviewer',
            },
        },
    },
};