import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import './create.css'; 
const Articles = () => {
  const [articles, setArticles] = useState([
    { id: 1, category: 'Science', title: 'Lorem ipsum dolor sit amet consectetur.', time: '2:32 pm' },
    { id: 2, category: 'Science', title: 'Lorem ipsum dolor sit amet consectetur.', time: '2:32 pm' },
    { id: 3, category: 'Science', title: 'Lorem ipsum dolor sit amet consectetur.', time: '2:32 pm' },
    { id: 4, category: 'Science', title: 'Lorem ipsum dolor sit amet consectetur.', time: '2:32 pm' }
  ]);
  const [showEditor, setShowEditor] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  const handleDelete = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };
  const handleEdit = (article) => {
    setCurrentArticle(article);
    setShowEditor(true);
  };
  const handleCreate = () => {
    setCurrentArticle(null); // Reset for new article
    setShowEditor(true);
  };
  const handleSave = (article) => {
    if (currentArticle) {
      // Edit existing article
      setArticles(articles.map(a => (a.id === article.id ? article : a)));
    } else {
      // Create new article
      setArticles([...articles, { ...article, id: Date.now(), time: new Date().toLocaleTimeString() }]);
    }
    setShowEditor(false);
  };
  return (
    <div className="articles-container">
      <div className="header">
        <h1>RECENT ARTICLES</h1>
        <button className="create-article-btn" onClick={handleCreate}>Create Article</button>
      </div>
      {articles.map(article => (
        <div className="article-item" key={article.id}>
          <img src="https://via.placeholder.com/74x43" alt="cover" />
          <div className="article-category">{article.category}</div>
          <div className="article-title">{article.title}</div>
          <div className="article-time">{article.time}</div>
          <div className="article-actions">
            <button className="edit-btn" onClick={() => handleEdit(article)}>Edit</button>
            <button className="delete-btn" onClick={() => handleDelete(article.id)}>Delete</button>
          </div>
        </div>
      ))}
      {showEditor && <ArticleEditor article={currentArticle} onSave={handleSave} onClose={() => setShowEditor(false)} />}
    </div>
  );
};
const ArticleEditor = ({ article, onSave, onClose }) => {
  const [title, setTitle] = useState(article?.title || '');
  const [category, setCategory] = useState(article?.category || '');
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [content, setContent] = useState(article?.content || '');
  const handleSaveClick = () => {
    onSave({ ...article, title, category, content });
  };
  return (
    <div className="editor-modal">
      <div className="editor-container">
        <h2>{article ? 'Edit Article' : 'Create New Article'}</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverImageUrl}
          onChange={(e) => setCoverImageUrl(e.target.value)}
        />
        <CKEditor
          data={content}
          onChange={(evt) => setContent(evt.editor.getData())}
        />
        <button className="save-btn" onClick={handleSaveClick}>Save</button>
        <button className="cancel-btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};
export default Articles;