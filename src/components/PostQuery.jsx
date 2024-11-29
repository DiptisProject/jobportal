import React, { useState } from 'react'
import '../styles/PostQuery.css'

const PostQuery = () => {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Query posted:', query)
    // Add your submit logic here
  }

  return (
    <div className="query-container">
      <h3>Post a Query</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={query}
          onChange={handleChange}
          placeholder="Enter your query here..."
          required
        />
        <button type="submit">Post Query</button>
      </form>
    </div>
  )
}

export default PostQuery
