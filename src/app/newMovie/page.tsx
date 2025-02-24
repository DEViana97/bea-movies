'use client'
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../firebase';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contex/authContext';


export default function AddMovie() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [watched, setWatched] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !image) return;

    try {
      setLoading(true);

      // Upload da imagem
      const imageRef = ref(storage, `movies/${user.uid}/${Date.now()}_${image.name}`);
      const uploadResult = await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(uploadResult.ref);

      // Salvar dados do filme
      await addDoc(collection(db, 'movies'), {
        userId: user.uid,
        title,
        imageUrl,
        watched,
        createdAt: new Date()
      });
      router.push('/');
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center">
          <button
            onClick={() => router.push('/')}
            className="mr-4 text-gray-600 hover:text-gray-900"
          >
            {/* <ArrowLeft className="h-6 w-6" /> */}
          </button>
          <div className="flex items-center">
            {/* <Film className="h-8 w-8 text-indigo-600" /> */}
            <h1 className="ml-3 text-3xl font-bold text-gray-900">
              Adicionar Novo Filme
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Título do Filme
              </label>
              <input
                type="text"
                id="title"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Imagem do Filme
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                required
                className="mt-1 block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-md file:border-0
                          file:text-sm file:font-medium
                          file:bg-indigo-50 file:text-indigo-700
                          hover:file:bg-indigo-100"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="watched"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={watched}
                onChange={(e) => setWatched(e.target.checked)}
              />
              <label
                htmlFor="watched"
                className="ml-2 block text-sm text-gray-900"
              >
                Já assisti este filme
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Salvando...' : 'Salvar Filme'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}