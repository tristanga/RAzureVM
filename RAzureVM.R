# Function: RAzureVM
# Title: Manage VMs lifecycle with R in Azure
# Description: Helps users to manage Azure VMs from within a R Session.
# Version: 0.1.1
# Date: 2017-11-29
# Author@R: Tristan G

if(!require("httr")) install.packages("httr")
if(!require("jsonlite")) install.packages("jsonlite")
if(!require("curl")) install.packages("curl")

RAzureVM_list <- function(client_id, client_secret, tenant_id, subscription_id) {
  api_version <- "2017-12-01"
  azure_handle <- new_handle()
  handle_setform(azure_handle,
                 "grant_type"="client_credentials",
                 "resource"="https://management.core.windows.net/",
                 "client_id"=client_id,
                 "client_secret"=client_secret
  )
  req <- curl_fetch_memory(paste("https://login.windows.net/",tenant_id,"/oauth2/token",sep=""), handle = azure_handle)
  res <- fromJSON(rawToChar(req$content))
  token <- paste("Bearer ",res$access_token, sep="")
  myurl <- paste("https://management.azure.com/subscriptions/",subscription_id,"/providers/Microsoft.Compute/virtualmachines?api-version=",api_version,sep="")
  r <- httr::GET(myurl,
                 add_headers(Authorization = token))
  toJSON(fromJSON(content(r,"text")), pretty = TRUE)
}

# Example: RAzureVM_list(client_id, client_secret, tenant_id, subscription_id)
