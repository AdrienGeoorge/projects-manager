<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/job', name: 'admin_job_')]
class JobSettingsController extends AbstractController
{
    #[Route('', name: 'home')]
    public function index(): Response
    {
        return $this->render('admin/job/index.html.twig', [
            'controller_name' => 'JobSettingsController',
        ]);
    }
}
