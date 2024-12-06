import React from 'react'

const AddCourse = () => {

    const handleAddCourse = async(e) => {
        e.preventDefault()

        const form = e.target
        const title = form.title.value
        const thumbnailUrl = form.thumbnailUrl.value
        const description = form.description.value
        const price = form.price.value
        const category = form.category.value

        const newCourse = {
            title,
            thumbnailUrl,
            description,
            price,
            category
        }

        try {
            const response = await fetch('http://localhost:5000/courses', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newCourse),
            });
        
            const result = await response.json();
            if (response.ok) {
              alert(result.message);
              form.reset(); // Clear the form after successful submission
            } else {
              alert('Error: ' + result.message);
            }
          } catch (error) {
            console.error('Error:', error);
            alert('Failed to add course');
          }
    }

    return (
        <div>
            <div className="container py-10">
                <h1 className='font-bold text-center text-4xl my-5'>Add Course</h1>

                <form onSubmit={handleAddCourse} className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto">
                    <div className="input-group mb-4">
                        <input name='title' type="text" placeholder="Course Title" className="input input-bordered w-full" />
                    </div>
                    <div className="input-group mb-4">
                        <input name='thumbnailUrl' type="text" placeholder="Thumbnail URL" className="input input-bordered w-full" />
                    </div>
                    <div className="input-group mb-4">
                        <textarea name='description' type="text" placeholder="Course Description" className="textarea input-bordered w-full" />
                    </div>
                    <div className="input-group mb-4">
                        <input name='price' type="number" placeholder="Course price" className="input input-bordered w-full" />
                    </div>
                    <div className="input-group mb-4">
                        <input name='category' type="text" placeholder="Course Category" className="input input-bordered w-full" />
                    </div>

                    <div className="input-group mt-10">
                        <input type="submit" value='Add Course' className='btn w-full btn-primary' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCourse
