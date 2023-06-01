import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { HiDocumentText} from "react-icons/hi";




function BottomContainer() {
    return (
        <div className="contactMe">


            <h1>Contact Me</h1>
            <div className="social-Media">
                <div class="container text-center ">
                    <div class="row gap-1">
                        <div class="col-sm ">
                            <div class="p-3">
                                <a href="">

                                    <button type="button" class="btn btn-outline-info box">
                                        <HiDocumentText className="footer-icon" />
                                        View CV</button>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm ">
                            <div class="p-3">
                                <a href="mailto:chetanjangid0064@gmail.com">
                                    <button type="button" class="btn btn-outline-info box ">
                                        <HiMail className="footer-icon" />
                                        Email</button>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm ">
                            <div class="p-3">
                                <a href="https://www.linkedin.com/in/chetan-jangid-a88a4a16a/?trk=public-profile-join-page">
                                    <button type="button" class="btn btn-outline-info box" >
                                        <FaLinkedin className="footer-icon" />
                                        LinkedIn</button>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm ">
                            <div class="p-3">
                                <a href="https://github.com/chetanJangid1221">

                                    <button type="button" class="btn btn-outline-info box">
                                        <FaGithub className="footer-icon" />
                                        GitHub</button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
<div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <svg class="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <i class="fa-brands fa-linkedin footer-icon"></i>
            <i class="fa-brands fa-github footer-icon"></i>
            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
        </ul>
    </footer>
</div>
export default BottomContainer;