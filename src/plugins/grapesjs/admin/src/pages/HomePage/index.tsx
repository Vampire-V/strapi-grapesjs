/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from 'react';
import pluginId from '../../pluginId';
import pluginPkg from "../../../../package.json"
import { Link } from 'react-router-dom';
import { useFetchClient } from '@strapi/helper-plugin';
// import * as helperPlugin from '@strapi/helper-plugin'
const HomePage = () => {
  const { get, post } = useFetchClient();
  const [name, setName] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [pages, setPages] = useState<Array<CustomPage>>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function getAllPages() {
      console.log('useEffect ...... : ');
      
      try {
        // const response = await reqInstance.get(`${API_HOST}/pages`);
        const response = await get(`/grapesjs/get-pages`)
        console.log(response);
        // let aa = response.data.data.map((d: any) => {
        //   let a: CustomPage = {
        //     id: d.id,
        //     name: d.attributes.name,
        //     slug: "",
        //     data: d.attributes.data,
        //   };
        //   return a;
        // });
        // console.log(aa);

        // setPages(aa);
      } catch (error: any) {
        setError(error.message);
        console.log('error : ',error);
        
      }
    }
    getAllPages();
  }, []);

  // const { get,post } = useFetchClient();

  
  const handleSubmit = async () => {
    if (!name) {
      setIsValid(false);
      return;
    }

    // const newPage = await create_page(name);
    // const newPage = await post('pages',{
    //   data: {
    //     data: null,
    //     name: name
    //   }
    // },true)
    setName("");
    // setPages([...pages, newPage]);
  };
  return (
    // <div>
    //   <h1>{pluginId}&apos;s HomePage</h1>
    //   <p>Happy coding</p>
    // </div>
    <div className="container">
      {/* <div className="row">
        <div className="col-12 mt-5">
          <form id="create-page">
            <div className="modal-header">
              <h5 className="modal-title" id="addPageModalLabel">
                Create Page
              </h5>
            </div>
            <div className="modal-body">
              <div className="col-auto">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control form-control-sm ${isValid ? "" : "is-invalid"}`}
                  id="name"
                  name="name"
                  placeholder="Name of Page"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!isValid && <div className="invalid-feedback">Please provide a valid name.</div>}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">
                Clear
              </button>
              <button type="button" className="btn btn-primary btn-sm" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 my-2">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Slug</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {pages.length > 0 ? (
                pages.map((page) => (
                  <tr key={page.id}>
                    <td>{page.id}</td>
                    <td>{page.name}</td>
                    <td>{page.slug}</td>
                    <td>
                      <Link to={`/editor/${page.id}`}>Edit</Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>No data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
export interface CustomPage {
  id: string;
  name: string;
  slug: string;
  data: string;
}
