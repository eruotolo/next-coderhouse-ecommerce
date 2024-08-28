import { NextResponse } from 'next/server';
import { db } from '@/app/config/firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

export async function GET(req, context) {
    const { category, slug } = context.params;

    if (!category || !slug) {
        console.error('Category and Slug are required');
        return NextResponse.json({ error: 'Category and Slug are required' }, { status: 400 });
    }

    try {
        console.log(`Fetching product with Category: ${category} and Slug: ${slug}`);
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where('nombre', '==', slug));
        const productSnapshot = await getDocs(q);

        if (productSnapshot.empty) {
            console.error('Product not found');
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        const productDoc = productSnapshot.docs[0];
        const product = { id: productDoc.id, ...productDoc.data() };
        console.log('Product data:', product);
        return NextResponse.json(product);
    } catch (error) {
        console.error('Failed to fetch product:', error);
        return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
    }
}
